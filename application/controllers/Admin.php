<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {
	private $status;
	private $lainnya;

	public function __construct(){
		parent::__construct();
		date_default_timezone_set('Asia/Makassar');
		if ($this->session->userdata('status') != 'masuk'){
			redirect(site_url());
		}

		$this->lainnya = $this->db->order_by('id', 'RANDOM')->limit(10)->get('postingan')->result();
	}

	public function tulisan_baru(){
		if (!$_POST) {
			$lainnya = $this->lainnya;
			$this->twig->display('postingan/tulisan_baru', compact('lainnya'));
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
		$lainnya = $this->lainnya;
		$this->twig->display('backup/beranda', compact('postingan', 'lainnya'));
	}

	public function edit($slug){
		if (!$_POST) {
			$data = $this->db->get_where('postingan', compact('slug'))->result()[0];
			$status = 'edit';
			$lainnya = $this->lainnya;
			$this->twig->display('postingan/tulisan_baru', compact('data', 'status', 'lainnya'));
		} else {
			$data = (object) $this->input->post();
			$this->db->update('postingan', $data, compact('slug'));
			redirect(site_url() . 'baca/' . $slug);
		}
	}

	public function hapus($slug){
		$this->db->delete('postingan', compact('slug'));
		redirect(site_url());
	}
}
