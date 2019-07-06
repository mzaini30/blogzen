<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {
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
		if (!$_POST) {
			$status = $this->status;
			$this->twig->display('login/beranda', compact('status'));
		} else {
			$data = (array) $this->input->post();
			$cek = $this->db->get_where('akun', $data)->num_rows();
			if ($cek > 0){
				$this->session->set_userdata('status', 'masuk');
				redirect(site_url());
			} else {
				$pesan = 'Maaf, username dan password Anda salah';
				$status = $this->status;
				$this->twig->display('login/beranda', compact('status', 'pesan'));
			}
		}
	}

	public function keluar(){
		$this->session->sess_destroy();
		redirect(site_url());
	}
}
