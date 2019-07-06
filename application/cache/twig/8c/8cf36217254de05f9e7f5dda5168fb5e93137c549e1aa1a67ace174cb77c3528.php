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

/* tes_twig/layout/default.twig */
class __TwigTemplate_dcf7f05a6fa39e8cf0083b1974af965fa897bdc7cbfe909aafe87189043fd573 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'judul' => [$this, 'block_judul'],
            'isi' => [$this, 'block_isi'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
<head>
\t<title>";
        // line 4
        $this->displayBlock('judul', $context, $blocks);
        echo "Tes Twig</title>
\t<meta charset=\"utf-8\">
\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">
</head>
<body>
\t";
        // line 9
        $this->displayBlock('isi', $context, $blocks);
        // line 10
        echo "</body>
</html>";
    }

    // line 4
    public function block_judul($context, array $blocks = [])
    {
    }

    // line 9
    public function block_isi($context, array $blocks = [])
    {
    }

    public function getTemplateName()
    {
        return "tes_twig/layout/default.twig";
    }

    public function getDebugInfo()
    {
        return array (  57 => 9,  52 => 4,  47 => 10,  45 => 9,  37 => 4,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
<head>
\t<title>{% block judul %}{% endblock %}Tes Twig</title>
\t<meta charset=\"utf-8\">
\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">
</head>
<body>
\t{% block isi %}{% endblock %}
</body>
</html>", "tes_twig/layout/default.twig", "/mnt/C48455A884559E2C/web/codeigniter twig/application/views/tes_twig/layout/default.twig");
    }
}
