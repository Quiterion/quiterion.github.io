---
layout: default
title: Blog
---

<section class="section">
    <div class="section-header">
        <span class="prompt">$</span>
        <span>ls -la ~/posts/</span>
    </div>
    <div class="box">
        <ul class="post-list">
            {% for post in site.posts %}
            <li class="post-item">
                <a href="{{ post.url | relative_url }}" class="post-link">
                    <span>{{ post.title }}</span>
                    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
</section>
