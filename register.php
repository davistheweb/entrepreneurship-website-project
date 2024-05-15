<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IMSU-E || Registration - Forms</title>
    <link rel="stylesheet" href="bootstrap-5.0.2-dist\css\bootstrap.min.css">
    <link rel="stylesheet" href="bootstrap-5.0.2-dist\css\bootstrap-utilities.css">
    <link href="assets/images/images.png" rel="icon">
    <link rel="stylesheet" href="register.css">
    <link rel="stylesheet" href="plugins\fonts\font-awesome-4.7.0\css/font-awesome.css">
</head>
<body class="page-wrap">
    <section class="reg-header">
        <nav class="navbar navbar-expand-lg nav-primary bg-success header_top">
            <div class="container-xxl">
                <span class="fw-bold text-dark">
                    
                    <h1 class="lead fw-bold text-light seven_size ">IMSU-E 
                        </span>
                    </h1>
        </div>
        </nav>
        </section>
        <main class="main">
    <section class="row">
        <div class="header_top_1 col-lg-6 col-sm-10 col-md-6 bg-light my-5 py-5 ">
            <div class="container justify-content-center px-5 header_top_2">
                <form class="row g-3 need-validation novalidate form_toper_1">
                    <div>
                        <h1>Student Registration.</h1>
                    </div>
                    <div class="container-fluid">
                        <div class="col-md-12">
                            <label for="fname" class="form-label">FullName</label><br><br>
                            <input type="text" class="form-control input_top" name="fullname" id="fname"> 
                        </div>
                    </div>
                    
                    <div class="col-md-12">
                            <label for="Matriculation No." class="form-label">Department</label><br><br>
                            <input type="text" class="form-control input_top" name="dept" id="fname"> 
                        </div>
                        <div class="col-md-12">
                            <label for="Matriculation No." class="form-label">Matriculation No.</label><br><br>
                            <input type="text" class="form-control input_top" name="matric-no" id="fname"> 
                        </div>
                        <div class="col-md-12">
                        <label for="number" class="form-label">Phone</label><br><br>
                        <input type="text" class="form-control input_top" name="phonenumber" id="pnumber">   
                    </div>
                    <div class="col-md-12">
                        <label for="email" class="form-label">Email</label><br><br>
                        <input type="text" class="form-control input_top"name="email" id="email">   
                    </div>
                    <!-- <div class="col-md-12 date_label_top">
                        <label for="validationCustom03" class="form-label">State</label>
                        <select id="state" required>
                            <option value="days">days</option> 
                            <option value="text">Imo State</option>
                            <option value="text">Abia state</option>
                            <option value="text">Akwa ibom</option>
                            <option value="text">River state</option>
                            <option value="text">Delta state</option>
                        </select>
                    </div> -->
                    <div class="col-md-12">
                        <div class="date_label_top">
                            <label for="name" class="form-label">Gender</label>
                            <select  id="checkbox" class="form-label_1">
                                <option value="" selected disabled></option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <label for="pass" class="form-label">Password</label><br><br>
                        <input type="password" class="form-control input_top" name="password" id="pass">   
                    </div>
                    <div class="col-md-12">
                        <label for="cpass" class="form-label">Comfirm Password</label><br><br>
                        <input type="password" class="form-control input_top" name="confirm-password" id="cpass">   
                    </div>
                    </div>
                        <br><br>
                        <div class="for-button">
                            <button type="button" id="btn">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
</body>
</html>


