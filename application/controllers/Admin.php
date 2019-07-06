<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {
	private $status;

	public function __construct(){
		parent::__construct();
		date_default_timezone_set('Asia/Makassar');
		if ($this->session->userdata('status') != 'masuk'){
			redirect(site_url());
		}
	}

	public function tulisan_baru(){
		if (!$_POST) {
			$this->twig->display('postingan/tulisan_baru');
		} else {
			$data = (object) $this->input->post();
			$data->slug = slug($data->judul);
			$data->waktu = date('Y-m-d H:i:s');
			$this->db->insert('postingan', $data);
			redirect(site_url());
		}
	}

	public function amankan(){
		$postingan = $this->db->get('postingan')->result();
		$this->twig->display('backup/beranda', compact('postingan'));
	}
}
