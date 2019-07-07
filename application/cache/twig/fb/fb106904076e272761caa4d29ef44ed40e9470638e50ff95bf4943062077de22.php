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

/* pembaca/beranda.twig */
class __TwigTemplate_4bc458dc680df35fbdd524e923880ad02abcd204e15d8898afc165800195cec9 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'isi' => [$this, 'block_isi'],
            'head' => [$this, 'block_head'],
            'skrip' => [$this, 'block_skrip'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "layout/default.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("layout/default.twig", "pembaca/beranda.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_isi($context, array $blocks = [])
    {
        // line 4
        echo "\t";
        if (($context["kata_kunci"] ?? null)) {
            // line 5
            echo "\t\t<div class=\"alert alert-warning\">Hasil pencarian dengan kata kunci <em>";
            echo twig_escape_filter($this->env, ($context["kata_kunci"] ?? null), "html", null, true);
            echo "</em></div>
\t";
        }
        // line 7
        echo "    ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["data"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 8
            echo "    \t<a href=\"";
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "baca/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "slug", []), "html", null, true);
            echo "\" class=\"bukan-link\">
\t        <div class=\"panel panel-default\">
\t        \t<div class=\"panel-heading\">";
            // line 10
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "judul", []), "html", null, true);
            echo "</div>
\t        \t<div class=\"panel-body\">";
            // line 11
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "isi", []), "html", null, true);
            echo "</div>
\t        \t<div class=\"panel-footer waktu waktu-";
            // line 12
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "id", []), "html", null, true);
            echo "\">Beberapa detik yang lalu</div>
\t        </div>
\t    </a>
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
        echo "    <style type=\"text/css\">
\t\t.bukan-link,
\t\t.bukan-link:hover,
\t\t.bukan-link:focus,
\t\t.bukan-link:visited,
\t\t.bukan-link:active {
\t\t\ttext-decoration: none;
\t\t\tcolor: inherit;
\t\t}
\t\t.waktu:first-letter {
\t\t\ttext-transform: uppercase;
\t\t}
    </style>
";
    }

    // line 34
    public function block_skrip($context, array $blocks = [])
    {
        // line 35
        echo "    <script src=\"";
        echo twig_escape_filter($this->env, base_url(), "html", null, true);
        echo "aset/vendor/moment/moment-with-locales.js\"></script>
    <script type=\"text/javascript\">
\t\tmoment.locale('id')
\t\t";
        // line 38
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["data"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 39
            echo "\t\t\t\$('.waktu-";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "id", []), "html", null, true);
            echo "').html(moment('";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "waktu", []), "html", null, true);
            echo "').fromNow())
\t\t\tsetInterval(function(){
\t\t\t\t\$('.waktu-";
            // line 41
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "id", []), "html", null, true);
            echo "').html(moment('";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "waktu", []), "html", null, true);
            echo "').fromNow())
\t\t\t}, 60000);
\t\t";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['x'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 44
        echo "\t</script>
";
    }

    public function getTemplateName()
    {
        return "pembaca/beranda.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  139 => 44,  128 => 41,  120 => 39,  116 => 38,  109 => 35,  106 => 34,  89 => 19,  86 => 18,  74 => 12,  70 => 11,  66 => 10,  58 => 8,  53 => 7,  47 => 5,  44 => 4,  41 => 3,  31 => 1,);
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
\t{% if kata_kunci %}
\t\t<div class=\"alert alert-warning\">Hasil pencarian dengan kata kunci <em>{{ kata_kunci }}</em></div>
\t{% endif %}
    {% for x in data %}
    \t<a href=\"{{ site_url() }}baca/{{ x.slug }}\" class=\"bukan-link\">
\t        <div class=\"panel panel-default\">
\t        \t<div class=\"panel-heading\">{{ x.judul }}</div>
\t        \t<div class=\"panel-body\">{{ x.isi }}</div>
\t        \t<div class=\"panel-footer waktu waktu-{{ x.id }}\">Beberapa detik yang lalu</div>
\t        </div>
\t    </a>
    {% endfor %}
{% endblock %}

{% block head %}
    <style type=\"text/css\">
\t\t.bukan-link,
\t\t.bukan-link:hover,
\t\t.bukan-link:focus,
\t\t.bukan-link:visited,
\t\t.bukan-link:active {
\t\t\ttext-decoration: none;
\t\t\tcolor: inherit;
\t\t}
\t\t.waktu:first-letter {
\t\t\ttext-transform: uppercase;
\t\t}
    </style>
{% endblock %}

{% block skrip %}
    <script src=\"{{ base_url() }}aset/vendor/moment/moment-with-locales.js\"></script>
    <script type=\"text/javascript\">
\t\tmoment.locale('id')
\t\t{% for x in data %}
\t\t\t\$('.waktu-{{ x.id }}').html(moment('{{ x.waktu }}').fromNow())
\t\t\tsetInterval(function(){
\t\t\t\t\$('.waktu-{{ x.id }}').html(moment('{{ x.waktu }}').fromNow())
\t\t\t}, 60000);
\t\t{% endfor %}
\t</script>
{% endblock %}", "pembaca/beranda.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/pembaca/beranda.twig");
    }
}
