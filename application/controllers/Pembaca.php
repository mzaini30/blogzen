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
		$data = $this->db->order_by('id', 'DESC')->get('postingan')->result();
		$this->twig->display('pembaca/beranda', compact('status', 'data'));
	}

	public function detail($slug){
		$data = $this->db->get_where('postingan', compact('slug'))->result();
		$status = $this->status;
		$this->twig->display('pembaca/detail', compact('data', 'status'));
	}
}
