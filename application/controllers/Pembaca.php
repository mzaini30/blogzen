<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pembaca extends CI_Controller {
	private $status;

	public function __construct(){
		parent::__construct();
		if ($this->session->userdata('status') == 'masuk'){
			$this->status = 'masuk';
		} else {
			$this->status = 'nggak masuk';
		}
	}

	public function index(){
		$status = $this->status;
		$this->twig->display('pembaca/beranda', compact('status'));
	}
}
