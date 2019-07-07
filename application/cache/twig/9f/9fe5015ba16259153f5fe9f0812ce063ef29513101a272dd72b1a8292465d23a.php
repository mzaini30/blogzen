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

/* postingan/tulisan_baru.twig */
class __TwigTemplate_cd8fbfb42ee22f026e0cf82fdc92d21db69e8441f1797ff7bf35c4b58fa6b57f extends \Twig\Template
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
        $this->parent = $this->loadTemplate("layout/default.twig", "postingan/tulisan_baru.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_judul($context, array $blocks = [])
    {
        // line 4
        echo "    ";
        if ((($context["status"] ?? null) == "edit")) {
            // line 5
            echo "        ";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "judul", []), "html", null, true);
            echo " -
    ";
        } else {
            // line 7
            echo "        Tulisan Baru -
    ";
        }
    }

    // line 11
    public function block_isi($context, array $blocks = [])
    {
        // line 12
        echo "\t<form method=\"post\">
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Judul</label>
    \t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"judul\" value=\"";
        // line 15
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "judul", []), "html", null, true);
        echo "\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Isi</label>
            <textarea id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" required=\"\" name=\"isi\">";
        // line 19
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "isi", []), "html", null, true);
        echo "</textarea>
    \t</div>
    \t<div class=\"form-group\">
    \t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Oke\">
    \t</div>
    </form>
";
    }

    public function getTemplateName()
    {
        return "postingan/tulisan_baru.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 19,  66 => 15,  61 => 12,  58 => 11,  52 => 7,  46 => 5,  43 => 4,  40 => 3,  30 => 1,);
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
    {% if status == 'edit' %}
        {{ data.judul }} -
    {% else %}
        Tulisan Baru -
    {% endif %}
{% endblock %}

{% block isi %}
\t<form method=\"post\">
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Judul</label>
    \t\t<input type=\"text\" class=\"form-control\" required=\"\" name=\"judul\" value=\"{{ data.judul }}\">
    \t</div>
    \t<div class=\"form-group\">
    \t\t<label for=\"\">Isi</label>
            <textarea id=\"\" cols=\"30\" rows=\"10\" class=\"form-control\" required=\"\" name=\"isi\">{{ data.isi }}</textarea>
    \t</div>
    \t<div class=\"form-group\">
    \t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Oke\">
    \t</div>
    </form>
{% endblock %}", "postingan/tulisan_baru.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/postingan/tulisan_baru.twig");
    }
}
