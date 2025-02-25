<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IMSU-E || Confirm Skill Result</title>
    <link rel="stylesheet" href="bootstrap-5.0.2-dist\css\bootstrap.min.css">
    <link href="assets/images/images.png" rel="icon">
    <link rel="stylesheet" href="bootstrap-5.0.2-dist\css\bootstrap-utilities.css">
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
    <section class="row">
        <div class="header_top_1 col-lg-4 col-sm-10 col-md-6 bg-light my-5 py-5 ">
            <div class="container justify-content-center px-5 header_top_2">
                <form class="row g-3 need-validation novalidate form_toper_1">
                    <div>
                        <h1>Confirm Skill Result.</h1>
                    </div>
                    <div class="col-md-12">
                        <label for="email" class="form-label">Email</label><br><br>
                        <input type="text" class="form-control input_top"name="email" id="email">   
                    </div>
                        <div class="col-md-12">
                        <label for="skillMatNo" class="form-label">Matriculation No.</label><br><br>
                        <input type="text" class="form-control input_top" name="skillMatNo" id="pass">   
                    </div>
                        <div class="col-md-12">
                        <label for="skillType" class="form-label">Skill Type</label><br><br>
                        <select  id="checkbox" class="form-label_1">
                                <option value="" selected disabled></option>
                                <option value="">Web Development/Design</option>
                                <option value="">Computer Maintenance</option>
                                <option value="">Make Up</option>
                            </select>
                    </div>
                        <div class="col-md-12">
                        <label for="academicSession" class="form-label">Academic Session</label><br><br>
                        <select  id="checkbox" class="form-label_1">
                                <option value="" selected disabled></option>
                                <option value="">2020/2021</option>
                                <option value="">2021/2022</option>
                                <option value="">2022/2023</option>
                                <option value="">2023/2024</option>
                        </select>
                    </div>
                    </div>
                        <br><br>
                        <div class="for-button">
                            <button type="button" id="btn">Check Result</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</body>
</html>