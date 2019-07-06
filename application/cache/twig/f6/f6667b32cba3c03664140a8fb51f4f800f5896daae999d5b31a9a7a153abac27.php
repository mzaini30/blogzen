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

/* pembaca/detail.twig */
class __TwigTemplate_dfa8fc8ffea4ab836cc2c3ad0eab627eea9b35947e3897f239a11cf94adadbe5 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'judul' => [$this, 'block_judul'],
            'isi' => [$this, 'block_isi'],
            'head' => [$this, 'block_head'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout/default.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("layout/default.twig", "pembaca/detail.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_judul($context, array $blocks = [])
    {
        // line 4
        echo "    ";
        echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["data"] ?? null), 0, [], "array"), "judul", []), "html", null, true);
        echo " -
";
    }

    // line 7
    public function block_isi($context, array $blocks = [])
    {
        // line 8
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["data"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 9
            echo "        <div class=\"panel panel-default\">
        \t<div class=\"panel-heading\">";
            // line 10
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "judul", []), "html", null, true);
            echo "</div>
        \t<div class=\"panel-body\">
\t\t\t\t<div class=\"konten\">";
            // line 12
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "isi", []), "html", null, true);
            echo "</div>
        \t</div>
        </div>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['x'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    // line 18
    public function block_head($context, array $blocks = [])
    {
        // line 19
        echo "    <style>
\t\t.konten {
\t\t\twhite-space: pre-wrap;
\t\t}
    </style>
";
    }

    public function getTemplateName()
    {
        return "pembaca/detail.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  82 => 19,  79 => 18,  67 => 12,  62 => 10,  59 => 9,  54 => 8,  51 => 7,  44 => 4,  41 => 3,  31 => 1,);
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

{% block judul %}
    {{ data[0].judul }} -
{% endblock %}

{% block isi %}
    {% for x in data %}
        <div class=\"panel panel-default\">
        \t<div class=\"panel-heading\">{{ x.judul }}</div>
        \t<div class=\"panel-body\">
\t\t\t\t<div class=\"konten\">{{ x.isi }}</div>
        \t</div>
        </div>
    {% endfor %}
{% endblock %}

{% block head %}
    <style>
\t\t.konten {
\t\t\twhite-space: pre-wrap;
\t\t}
    </style>
{% endblock %}", "pembaca/detail.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/pembaca/detail.twig");
    }
}
