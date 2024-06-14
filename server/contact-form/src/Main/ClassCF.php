<?php

namespace TamerInawy\ContactForm\Main;

class ClassCF
{
  private $rest_namespace = 'tamer-inawy/v1';
  private $rest_route = 'contact-form';

  function __construct()
  {
    add_action(
      'init',
      array($this, 'bootstrap')
    );

    add_action(
      'rest_api_init',
      array($this, 'register_meta')
    );

    add_filter(
      'rest_pre_dispatch',
      array($this, 'save_meta'),
      1,
      3
    );
  }

  public function bootstrap()
  {
    $lables = array(
      'name' => __('Form'),
      'email' => __('Email'),
      'message' => __('Message'),
    );
    $args = array(
      'public'       => true,
      'label'        => $lables['name'],
      'labels'       => $lables,
      'show_in_rest' => true,
      'rest_namespace' => $this->rest_namespace,
      'rest_base' => 'contact-form',
      'publicly_queryable' => true,
      'show_ui' => true,
      'delete_with_user' => false,
      'rest_controller_class' => 'WP_REST_Posts_Controller',
      'has_archive' => false,
      'show_in_menu' => true,
      'show_in_nav_menus' => false,
      'exclude_from_search' => true,
      // 'capability_type' => 'post',
      'map_meta_cap' => true,
      'hierarchical' => false,
      // 'rewrite' => array('slug' => 'cform', 'with_front' => false),
      'query_var' => true,
      'supports' => array(
        'title',
        'custom-fields',
      ),
    );
    register_post_type('form', $args);
  }

  public function register_meta()
  {
    register_post_meta(
      'form',
      'email',
      array(
        'single'       => true,
        'type'         => 'string',
        'show_in_rest' => true
      )
    );
    register_post_meta(
      'form',
      'message',
      array(
        'single'       => true,
        'type'         => 'string',
        'show_in_rest' => true
      )
    );
  }

  public function save_meta(mixed $result, \WP_REST_Server $server, \WP_REST_Request $request)
  {
    $route = $request->get_route();
    $method = $request->get_method();

    if ($route !== '/' . $this->rest_namespace . '/' . $this->rest_route) {
      return;
    }

    if ($method !== 'POST') {
      return new \WP_Error(
        'rest_no_route',
        __('No route was found matching the URL and request method.'),
        [
          'status' => 404,
        ]
      );
    }

    $body = json_decode($request->get_body());
    $body->name = trim($body->name);
    $body->email = trim($body->email);
    $body->message = trim($body->message);

    if (!$body->name || !$body->email || !$body->message || !is_email($body->email)) {
      return new \WP_Error(
        'rest_cannot_create_object',
        __('Invalid form data.'),
        [
          'status' => 422,
          'data' => $body
        ]
      );
    }

    if (!$this->is_valid_email_time($body->email)) {
      return new \WP_Error(
        'rest_cannot_create_object',
        __('Already sent less than hour ago.'),
        [
          'status' => 400
        ]
      );
    }

    $body->title = sanitize_text_field(trim($body->name));
    $body->status = 'publish';
    $body->meta = array(
      'email' => sanitize_text_field(trim($body->email)),
      'message' => sanitize_textarea_field(trim($body->message)),
    );
    $request->set_body(json_encode($body));
  }

  private function is_valid_email_time($email)
  {

    $args = array(
      'meta_query' => array(
        array(
          'key' => 'email',
          'value' => $email,
        )
      ),
      'post_type' => 'form',
      'posts_per_page' => 1,
      'numberposts'      => 1,
      'orderby'          => 'date',
      'order'            => 'DESC',
    );
    $posts = new \WP_Query($args);
    $now = time();
    if ($posts->have_posts()) {
      $diff = ($now - strtotime($posts->posts[0]->post_date)) / 60;
      return !($diff < 60);
    }

    return true;
  }
}
