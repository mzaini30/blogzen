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

/* backup/beranda.twig */
class __TwigTemplate_4bfb4eb3b159804ed06d8991a5a71b3dd8052f60a01f8f184b6aa80f56726440 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'judul' => [$this, 'block_judul'],
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
        $this->parent = $this->loadTemplate("layout/default.twig", "backup/beranda.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_judul($context, array $blocks = [])
    {
        // line 4
        echo "    Backup -
";
    }

    // line 7
    public function block_isi($context, array $blocks = [])
    {
        // line 8
        echo "\t<div class=\"form-group\">
        <label for=\"\">Backup</label>
        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" readonly=\"\">
        \tDELETE FROM `postingan`;
\t            ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["postingan"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 13
            echo "\t            \tINSERT INTO `postingan` VALUES (null,'";
            echo twig_escape_filter($this->env, twig_replace_filter($this->getAttribute($context["x"], "judul", []), ["'" => "''"]), "html", null, true);
            echo "','";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "slug", []), "html", null, true);
            echo "','";
            echo twig_escape_filter($this->env, twig_replace_filter($this->getAttribute($context["x"], "isi", []), ["'" => "''"]), "html", null, true);
            echo "','";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "waktu", []), "html", null, true);
            echo "');
\t            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['x'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 15
        echo "        </textarea>
    </div>
";
    }

    public function getTemplateName()
    {
        return "backup/beranda.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  76 => 15,  61 => 13,  57 => 12,  51 => 8,  48 => 7,  43 => 4,  40 => 3,  30 => 1,);
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
    Backup -
{% endblock %}

{% block isi %}
\t<div class=\"form-group\">
        <label for=\"\">Backup</label>
        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" readonly=\"\">
        \tDELETE FROM `postingan`;
\t            {% for x in postingan %}
\t            \tINSERT INTO `postingan` VALUES (null,'{{ x.judul | replace({'\\'': '\\'\\''}) }}','{{ x.slug }}','{{ x.isi | replace({'\\'': '\\'\\''}) }}','{{ x.waktu }}');
\t            {% endfor %}
        </textarea>
    </div>
{% endblock %}", "backup/beranda.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/backup/beranda.twig");
    }
}
