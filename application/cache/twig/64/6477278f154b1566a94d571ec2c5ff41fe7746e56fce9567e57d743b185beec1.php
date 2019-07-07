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

/* pembaca/rss.twig */
class __TwigTemplate_a4acafe957bd3c6154255b6d8eb6a1d8de9a84583562b8e7d462b1bb536ffdf7 extends \Twig\Template
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
        echo "<?xml version=\"1.0\" encoding=\"";
        echo twig_escape_filter($this->env, ($context["encoding"] ?? null), "html", null, true);
        echo "\"?>
<rss version=\"2.0\"
    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"
    xmlns:sy=\"http://purl.org/rss/1.0/modules/syndication/\"
    xmlns:admin=\"http://webns.net/mvcb/\"
    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"
    xmlns:content=\"http://purl.org/rss/1.0/modules/content/\">
 
    <channel>
     
    <title>";
        // line 11
        echo twig_escape_filter($this->env, ($context["feed_name"] ?? null), "html", null, true);
        echo "</title>
 
    <link>";
        // line 13
        echo twig_escape_filter($this->env, ($context["feed_url"] ?? null), "html", null, true);
        echo "</link>
    <description>";
        // line 14
        echo twig_escape_filter($this->env, ($context["page_description"] ?? null), "html", null, true);
        echo "</description>
    <dc:language>";
        // line 15
        echo twig_escape_filter($this->env, ($context["page_language"] ?? null), "html", null, true);
        echo "</dc:language>
    <dc:creator>";
        // line 16
        echo twig_escape_filter($this->env, ($context["creator_email"] ?? null), "html", null, true);
        echo "</dc:creator>
 
    <dc:rights>Copyright ";
        // line 18
        echo twig_escape_filter($this->env, ($context["waktu"] ?? null), "html", null, true);
        echo "</dc:rights>
    <admin:generatorAgent rdf:resource=\"http://www.codeigniter.com/\" />
 
    
    ";
        // line 22
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["posts"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["x"]) {
            // line 23
            echo "        
     
        <item>
 
          <title>";
            // line 27
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "judul", []), "html", null, true);
            echo "</title>
          <link>";
            // line 28
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "baca/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "slug", []), "html", null, true);
            echo "</link>
          <guid>";
            // line 29
            echo twig_escape_filter($this->env, site_url(), "html", null, true);
            echo "baca/";
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "slug", []), "html", null, true);
            echo "</guid>
 
            <description><![CDATA[ ";
            // line 31
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "isi", []), "html", null, true);
            echo " ]]></description>
            <pubDate>";
            // line 32
            echo twig_escape_filter($this->env, $this->getAttribute($context["x"], "waktu", []), "html", null, true);
            echo "</pubDate>
        </item>
 
         
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['x'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 37
        echo "     
    </channel>
</rss>";
    }

    public function getTemplateName()
    {
        return "pembaca/rss.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 37,  104 => 32,  100 => 31,  93 => 29,  87 => 28,  83 => 27,  77 => 23,  73 => 22,  66 => 18,  61 => 16,  57 => 15,  53 => 14,  49 => 13,  44 => 11,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<?xml version=\"1.0\" encoding=\"{{ encoding }}\"?>
<rss version=\"2.0\"
    xmlns:dc=\"http://purl.org/dc/elements/1.1/\"
    xmlns:sy=\"http://purl.org/rss/1.0/modules/syndication/\"
    xmlns:admin=\"http://webns.net/mvcb/\"
    xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"
    xmlns:content=\"http://purl.org/rss/1.0/modules/content/\">
 
    <channel>
     
    <title>{{ feed_name }}</title>
 
    <link>{{ feed_url }}</link>
    <description>{{ page_description }}</description>
    <dc:language>{{ page_language }}</dc:language>
    <dc:creator>{{ creator_email }}</dc:creator>
 
    <dc:rights>Copyright {{ waktu }}</dc:rights>
    <admin:generatorAgent rdf:resource=\"http://www.codeigniter.com/\" />
 
    
    {% for x in posts %}
        
     
        <item>
 
          <title>{{ x.judul }}</title>
          <link>{{ site_url() }}baca/{{ x.slug }}</link>
          <guid>{{ site_url() }}baca/{{ x.slug }}</guid>
 
            <description><![CDATA[ {{ x.isi }} ]]></description>
            <pubDate>{{ x.waktu }}</pubDate>
        </item>
 
         
    {% endfor %}
     
    </channel>
</rss>", "pembaca/rss.twig", "/mnt/C48455A884559E2C/web/blogzen/application/views/pembaca/rss.twig");
    }
}
