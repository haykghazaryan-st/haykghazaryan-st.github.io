---
layout: home
---

{% include home_section.html 
    title=site.data.home.company.title 
    subtitle=site.data.home.company.subtitle 
    content=site.data.home.company.content 
    url=site.data.home.company.url
    images=site.data.home.company.images
    heading=site.data.home.company.heading
    subheading=site.data.home.company.subheading
    with_border="true"
%}

{% include home_section.html 
    title=site.data.home.product.title 
    subtitle=site.data.home.product.subtitle 
    content=site.data.home.product.content 
    url=site.data.home.product.url
    images=site.data.home.product.images
    heading=site.data.home.product.heading
    subheading=site.data.home.product.subheading
    with_border="true"
%}

{% include home_section.html 
    title=site.data.home.team.title 
    subtitle=site.data.home.team.subtitle 
    content=site.data.home.team.content 
    url=site.data.home.team.url 
    images=site.data.home.team.images
    heading=site.data.home.team.heading
    subheading=site.data.home.team.subheading
    with_border="true"
%}

{% include home_section.html
    title=site.data.home.benefits.title
    subtitle=site.data.home.benefits.subtitle
    subheading=site.data.home.benefits.subheading
    legend=site.data.home.benefits.legend
    icon_items=site.data.home.benefits.icon_items
    with_border="false"
%}

{% include home_section.html
    title=site.data.home.relocation.title
    subtitle=site.data.home.relocation.subtitle
    subheading=site.data.home.relocation.subheading
    list=site.data.home.relocation.list
%}
