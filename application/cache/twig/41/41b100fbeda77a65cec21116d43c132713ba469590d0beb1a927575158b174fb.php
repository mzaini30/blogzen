<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* layout/default.twig */
class __TwigTemplate_5fdf4c65a189ec4ef83ecd38f22923bd01e39dcc7261c4cb0e672e432b304711 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'judul' => [$this, 'block_judul'],
            'head' => [$this, 'block_head'],
            'isi' => [$this, 'block_isi'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!-- 

\tWebsite ini dibuat oleh Zen - 081545143654

 -->
<!DOCTYPE html>
<html>
<head>
\t<title>";
        // line 9
        $this->displayBlock('judul', $context, $blocks);
        echo "Zen</title>
\t<meta charset=\"utf-8\">
\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">
\t<link rel=\"stylesheet\" href=\"";
        // line 12
        echo twig_escape_filter($this->env, base_url(), "html", null, true);
        echo "aset/vendor/bootstrap/css/bootstrap.min.css\">
\t";
        // line 13
        $this->displayBlock('head', $context, $blocks);
        // line 14
        echo "</head>
<body>
\t<div class=\"navbar navbar-default\">
\t\t<div class=\"container\">
\t\t\t<div class=\"navbar-header\">
\t\t\t\t<a href=\"";
        // line 19
        echo twig_escape_filter($this->env, site_url(), "html", null, true);
        echo "\" class=\"navbar-brand\">Zen</a>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-sm-9\">
\t\t\t\t";
        // line 26
        $this->displayBlock('isi', $context, $blocks);
        // line 27
        echo "\t\t\t</div>
\t\t\t<div class=\"col-sm-3\">
\t\t\t\t";
        // line 29
        $this->loadTemplate("include/sidebar.twig", "layout/default.twig", 29)->display($context);
        // line 30
        echo "\t\t\t</div>
\t\t</div>
\t</div>
</body>
</html>";
    }

    // line 9
    public function block_judul($context, array $blocks = [])
    {
    }

    // line 13
    public function block_head($context, array $blocks = [])
    {
    }

    // line 26
    public function block_isi($context, array $blocks = [])
    {
    }

    public function getTemplateName()
    {
        return "layout/default.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  98 => 26,  93 => 13,  88 => 9,  80 => 30,  78 => 29,  74 => 27,  72 => 26,  62 => 19,  55 => 14,  53 => 13,  49 => 12,  43 => 9,  33 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<!-- 

\tWebsite ini dibuat oleh Zen - 081545143654

 -->
<!DOCTYPE html>
<html>
<head>
\t<title>{% block judul %}{% endblock %}Zen</title>
\t<meta charset=\"utf-8\">
\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">
\t<link rel=\"stylesheet\" href=\"{{ base_url() }}aset/vendor/bootstrap/css/bootstrap.min.css\">
\t{% block head %}{% endblock %}
</head>
<body>
\t<div class=\"navbar navbar-default\">
\t\t<div class=\"container\">
\t\t\t<div class=\"navbar-header\">
\t\t\t\t<a href=\"{{ site_url() }}\" class=\"navbar-brand\">Zen</a>
\t\t\t</div>
\t\t</div>
\t</div>
\t<div class=\"container\">
\t\t<div class=\"row\">
\t\t\t<div class=\"col-sm-9\">
\t\t\t\t{% block isi %}{% endblock %}
\t\t\t</div>
\t\t\t<div class=\"col-sm-3\">
\t\t\t\t{% include 'include/sidebar.twig' %}
\t\t\t</div>
\t\t</div>
\t</div>
</body>
</html>", "layout/default.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/layout/default.twig");
    }
}
