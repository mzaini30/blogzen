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
            'menu' => [$this, 'block_menu'],
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
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "judul", []), "html", null, true);
        echo " -
";
    }

    // line 7
    public function block_isi($context, array $blocks = [])
    {
        // line 8
        echo "    <div class=\"panel panel-default\">
    \t<div class=\"panel-heading\">";
        // line 9
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "judul", []), "html", null, true);
        echo "</div>
    \t<div class=\"panel-body\">
\t\t\t<div class=\"konten\">";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "isi", []), "html", null, true);
        echo "</div>
    \t</div>
    </div>

    
        <div id=\"disqus_thread\"></div>
        <script>

        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

        var disqus_config = function () {
        this.page.url = '";
        // line 24
        echo twig_escape_filter($this->env, site_url(), "html", null, true);
        echo "baca/";
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "slug", []), "html", null, true);
        echo "';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = '";
        // line 25
        echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "slug", []), "html", null, true);
        echo "'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://zenheroku.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>
    
                                
";
    }

    // line 40
    public function block_menu($context, array $blocks = [])
    {
        // line 41
        echo "    ";
        if ((($context["status"] ?? null) == "masuk")) {
            // line 42
            echo "        <div class=\"panel panel-default\">
            <div class=\"panel-heading\">Postingan</div>
            <div class=\"list-group\">
                <a href=\"";
            // line 45
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "baca/";
            echo twig_escape_filter($this->env, $this->getAttribute(($context["data"] ?? null), "slug", []), "html", null, true);
            echo "/edit\" class=\"list-group-item\">Edit</a>
            </div>
        </div>
    ";
        }
    }

    // line 51
    public function block_head($context, array $blocks = [])
    {
        // line 52
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
        return array (  128 => 52,  125 => 51,  114 => 45,  109 => 42,  106 => 41,  103 => 40,  85 => 25,  79 => 24,  63 => 11,  58 => 9,  55 => 8,  52 => 7,  45 => 4,  42 => 3,  32 => 1,);
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
    {{ data.judul }} -
{% endblock %}

{% block isi %}
    <div class=\"panel panel-default\">
    \t<div class=\"panel-heading\">{{ data.judul }}</div>
    \t<div class=\"panel-body\">
\t\t\t<div class=\"konten\">{{ data.isi }}</div>
    \t</div>
    </div>

    
        <div id=\"disqus_thread\"></div>
        <script>

        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

        var disqus_config = function () {
        this.page.url = '{{ site_url() }}baca/{{ data.slug }}';  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = '{{ data.slug }}'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://zenheroku.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
        </script>
        <noscript>Please enable JavaScript to view the <a href=\"https://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>
    
                                
{% endblock %}

{% block menu %}
    {% if status == 'masuk' %}
        <div class=\"panel panel-default\">
            <div class=\"panel-heading\">Postingan</div>
            <div class=\"list-group\">
                <a href=\"{{ site_url() }}baca/{{ data.slug }}/edit\" class=\"list-group-item\">Edit</a>
            </div>
        </div>
    {% endif %}
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
