<svelte:head>
 <title>Tulis</title>
</svelte:head>

<form>
 <table class="table table-bordered">
  <tbody>
   <tr>
    <td>
     <input type="search" class="form-control" placeholder="Judul">
    </td>
    <td>
     <input type="search" class="form-control" placeholder="Deskripsi">
    </td>
   </tr>
   <tr>
    <td colspan="2">
     <textarea class="form-control" placeholder="isi"></textarea>
    </td>
   </tr>
  </tbody>
 </table>
 <div class="bawah">
  <input type="submit" value="&check;" class="btn btn-success">
 </div>
</form>

<style>
 .form-control {
 	border: none;
 	box-shadow: none;
 }
 td {
 	padding: 0;
 }
</style>
