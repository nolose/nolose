<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es" >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="initial-scale=1, maximum-scale=1" />
<meta name="viewport" content="width=device-width" />
<title>BigBang - Html Template by Brankic1979</title>

<link rel="stylesheet" type="text/css" href="css/style.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/blog.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/socialize-bookmarks.css" media="screen" />
<link href='http://fonts.googleapis.com/css?family=Oswald:400,700,300' rel='stylesheet' type='text/css' />

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="javascript/custom.js"></script>
<script type="text/javascript" src="javascript/header.js"></script>
<script type="text/javascript" src="javascript/twitter.js"></script>
<script type="text/javascript" src="javascript/facebook.js"></script>
<script type="text/javascript" src="javascript/google.js"></script>

<!-- PrettyPhoto --> 
<link rel="stylesheet" href="css/prettyPhoto.css" type="text/css" media="screen" />
<script type="text/javascript" src="javascript/prettyPhoto.js"></script>	

<!-- Photostream Javascript --> 
<script type="text/javascript" src="javascript/bra.photostream.js"></script>

<!-- Google Map Javascript --> 
<script type="text/javascript" src="javascript/google_map_plugin.js"></script>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>

<!-- Contact form Javascript --> 
<script type="text/javascript" src="javascript/contact-form-validate.js"></script>	

</head>

<body id="top">

<div id="wrapper">	

<div class="content-wrapper clear">

	<!-- START HEADER -->
	
	<div id="header-wrapper">
	
		<div class="header clear">
			
			<div id="logo">	
				<a href="index.html"><img src="images/nolose-logo.png" alt="" /></a>
			</div><!--END LOGO-->
                
			<div id="primary-menu">
				<!-- Me gusta Google -->
				<ul class="menu">
                	<li><div class="g-plusone"></div></li>
					<li><a href="index.php?section=1" class="current">Sobre Mí</a>		
					</li>
					<li><a href="index.php?section=2">Trabajo</a>		
					</li>
                                        <li><a target="_blank" href="curriculum/index.php">Currículum</a>		
					</li>
					<li><a href="index.php?section=3">Contacto</a>		
					</li>
				</ul><!--END UL-->
				
			</div><!--END PRIMARY MENU-->
			
		</div><!--END HEADER-->	
		
	</div><!--END HEADER-WRAPPER-->		
	
	<!-- END HEADER -->
        
        <?php	
            switch ($_GET['section']) {
                //MAIN						
		case 1: include("main.php"); break;
                //WORK						
		case 2: include("work.php"); break;
                //CONTACT						
		case 3: include("contact.php"); break;
                
                default: include("main.php"); break; 
            }
	?>

	<!-- START FOOTER -->
	
	<div id="footer">
	
		<div id="footer-content">
					
				<div id="footer-top" class="clear">
					
					<div class="one-fourth">
						<h3>ENCUENTREME</h3>	
						<p><strong>Tel</strong>: (+34) 668 845 338<br />
					<strong>E-Mail</strong>: pedro(at)nolose.es<br /></p>
			  <ul class="social-bookmarks">		
					<li class="twitter"><a href="http://twitter.com/pedritobosch" target="_blank">twitter</a></li>
					<li class="facebook"><a href="http://www.facebook.com/pebosch" target="_blank">facebook</a></li>
					<li class="linkedin"><a href="http://es.linkedin.com/in/pebosch" target="_blank">linkedin</a></li>
                    <li class="googleplus"><a href="http://plus.google.com/u/0/108560094538898741657" target="_blank">googleplus</a></li>	
                    <li class="skype"><a href="callto://pebosch.skype" target="_blank">skype</a></li>	
                    
                 

                    	
				</ul>
				<!--END SOCIAL-BOOKMARKS-->
					</div><!--END ONE-FOURTH-->	
		
					<div class="one-fifth last">
						<h3>ÚLTIMOS TWEETS</h3>
						<div class="tweets"></div><!--END TWEETS-->				
					</div><!--END ONE-FOURTH LAST-->
					
				</div><!--END FOOTER-TOP-->
		
			
				<div id="footer-bottom" class="clear">
							
					<div class="one-half">
						<p>&copy; Nolose Network 2013 - <a href="http://validator.w3.org/check?uri=referer" target="_blank">xhtml</a> - <a href="http://jigsaw.w3.org/css-validator/check/referer" target="_blank">css</a> - Todos los derechos reservados.</p>
					</div><!--END ONE-HALF-->	
							
					<div class="one-half text-align-right last">			
						<p><a href="#">English</a> | <a href="/curriculum" target="_blank">Curriculum</a> | <a href="http://www.reddelsur.es" target="_blank">Red del Sur</a> | <a href="mailto:pedro@nolose.es">Webmaster</a></p>
					</div><!--END ONE-HALF TRIGGER-FOOTER LAST-->
					
				</div><!--END FOOTER-BOTTOM-->	
			
		</div><!--END FOOTER-CONTENT-->		
	
	</div><!--END FOOTER-->
	
	<!-- END FOOTER -->	
			
</div><!-- END CONTENT-WRAPPER --> 

</div><!-- END WRAPPER --> 

</body>
</html>