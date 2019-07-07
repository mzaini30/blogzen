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

		$this->lainnya = $this->db->order_by('id', 'RANDOM')->limit(10)->get('postingan')->result();
	}

	public function index(){
		$status = $this->status;
		$data = $this->db->order_by('id', 'DESC')->get('postingan')->result();
		foreach ($data as $x) {
			$x->isi = character_limiter($x->isi, 300, '...');
		}
		$lainnya = $this->lainnya;
		$this->twig->display('pembaca/beranda', compact('status', 'data', 'lainnya'));
	}

	public function detail($slug){
		$data = $this->db->get_where('postingan', compact('slug'))->result()[0];
		$status = $this->status;
		$lainnya = $this->lainnya;
		$this->twig->display('pembaca/detail', compact('data', 'status', 'lainnya'));
	}

	public function cari(){
		$kata_kunci = $this->input->get('kata_kunci');
		$data = $this->db->like('judul', $kata_kunci)->or_like('isi', $kata_kunci)->order_by('waktu', 'DESC')->get('postingan')->result();
		$lainnya = $this->lainnya;
		$status = $this->status;
		$this->twig->display('pembaca/beranda', compact('data', 'status', 'lainnya', 'kata_kunci'));
	}
}
