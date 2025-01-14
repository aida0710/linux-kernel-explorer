---
sidebar_position: 4
---
# asciidoctor-extensions.rb

### ファイル情報

- パス: `linux-v6.12/tools/perf/Documentation/asciidoctor-extensions.rb`

### コンテンツ

```rb
require 'asciidoctor'
require 'asciidoctor/extensions'

module Perf
  module Documentation
    class LinkPerfProcessor < Asciidoctor::Extensions::InlineMacroProcessor
      use_dsl

      named :chrome

      def process(parent, target, attrs)
        if parent.document.basebackend? 'html'
          %(<a href="#{target}.html">#{target}(#{attrs[1]})</a>\n)
        elsif parent.document.basebackend? 'manpage'
          "#{target}(#{attrs[1]})"
        elsif parent.document.basebackend? 'docbook'
          "<citerefentry>\n" \
            "<refentrytitle>#{target}</refentrytitle>" \
            "<manvolnum>#{attrs[1]}</manvolnum>\n" \
          "</citerefentry>\n"
        end
      end
    end
  end
end

Asciidoctor::Extensions.register do
  inline_macro Perf::Documentation::LinkPerfProcessor, :linkperf
end

```
