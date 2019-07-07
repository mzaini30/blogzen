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

/* include/sidebar.twig */
class __TwigTemplate_0f632bcd03e7e5758dfea400b2ef44643a66d5320b718be1fab420a56d257f76 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<form action=\"";
        echo twig_escape_filter($this->env, site_url(), "html", null, true);
        echo "cari\" method=\"get\">
\t<div class=\"form-group\">
\t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"kata_kunci\" placeholder=\"Cari\">
\t</div>
</form>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">Tulisan Lainnya</div>
\t<div class=\"list-group\">
\t\t";
        // line 10
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["lainnya"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 11
            echo "\t\t    <a href=\"";
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "baca/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "slug", []), "html", null, true);
            echo "\" class=\"list-group-item\">";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "judul", []), "html", null, true);
            echo "</a>
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['x'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "\t</div>
</div>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">Admin</div>
\t<div class=\"list-group\">
\t\t";
        // line 19
        if ((($context["status"] ?? null) == "nggak masuk")) {
            // line 20
            echo "\t\t\t<a href=\"";
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "masuk\" class=\"list-group-item\">Login</a>    
\t\t";
        } else {
            // line 22
            echo "\t\t\t<a href=\"";
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "tulisan-baru\" class=\"list-group-item\">Tulisan Baru</a>
\t\t\t<a href=\"";
            // line 23
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "backup\" class=\"list-group-item\">Backup</a>
\t\t\t<a href=\"";
            // line 24
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "keluar\" class=\"list-group-item\">Logout</a>\t
\t\t";
        }
        // line 26
        echo "\t</div>
</div>";
    }

    public function getTemplateName()
    {
        return "include/sidebar.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  90 => 26,  85 => 24,  81 => 23,  76 => 22,  70 => 20,  68 => 19,  60 => 13,  47 => 11,  43 => 10,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<form action=\"{{ site_url() }}cari\" method=\"get\">
\t<div class=\"form-group\">
\t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"kata_kunci\" placeholder=\"Cari\">
\t</div>
</form>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">Tulisan Lainnya</div>
\t<div class=\"list-group\">
\t\t{% for x in lainnya %}
\t\t    <a href=\"{{ site_url() }}baca/{{ x.slug }}\" class=\"list-group-item\">{{ x.judul }}</a>
\t\t{% endfor %}
\t</div>
</div>

<div class=\"panel panel-default\">
\t<div class=\"panel-heading\">Admin</div>
\t<div class=\"list-group\">
\t\t{% if status == 'nggak masuk' %}
\t\t\t<a href=\"{{ site_url() }}masuk\" class=\"list-group-item\">Login</a>    
\t\t{% else %}
\t\t\t<a href=\"{{ site_url() }}tulisan-baru\" class=\"list-group-item\">Tulisan Baru</a>
\t\t\t<a href=\"{{ site_url() }}backup\" class=\"list-group-item\">Backup</a>
\t\t\t<a href=\"{{ site_url() }}keluar\" class=\"list-group-item\">Logout</a>\t
\t\t{% endif %}
\t</div>
</div>", "include/sidebar.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/include/sidebar.twig");
    }
}
