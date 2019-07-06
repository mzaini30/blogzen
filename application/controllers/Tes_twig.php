<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tes_twig extends CI_Controller {
	public function index(){
		$nama = 'Zen';
		$this->twig->display('tes_twig/hello_world', compact('nama'));
	}
}
