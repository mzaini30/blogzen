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

/* login/beranda.twig */
class __TwigTemplate_97cb9b32e91fb74265520f7d7cdde64f9154ef085506b6cbd8c5021d67d6b65f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'isi' => [$this, 'block_isi'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout/default.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("layout/default.twig", "login/beranda.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_isi($context, array $blocks = [])
    {
        // line 4
        echo "\t";
        if (($context["pesan"] ?? null)) {
            // line 5
            echo "\t\t<div class=\"alert alert-warning\">";
            echo twig_escape_filter($this->env, ($context["pesan"] ?? null), "html", null, true);
            echo "</div>
\t";
        }
        // line 7
        echo "    <form method=\"post\">
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Username</label>
    \t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"username\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Password</label>
    \t\t<input type=\"password\" class=\"form-control\" required=\"\" name=\"password\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Oke\">
    \t</div>
    </form>
";
    }

    public function getTemplateName()
    {
        return "login/beranda.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  51 => 7,  45 => 5,  42 => 4,  39 => 3,  29 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'layout/default.twig' %}

{% block isi %}
\t{% if pesan %}
\t\t<div class=\"alert alert-warning\">{{ pesan }}</div>
\t{% endif %}
    <form method=\"post\">
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Username</label>
    \t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"username\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Password</label>
    \t\t<input type=\"password\" class=\"form-control\" required=\"\" name=\"password\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Oke\">
    \t</div>
    </form>
{% endblock %}", "login/beranda.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/login/beranda.twig");
    }
}
