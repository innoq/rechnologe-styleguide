
module ComponentHelper
  def tabelle_toggler_tag(expanded, label_expand:, label_collapse:)
    button_tag is: 'tabelle-toggler', hidden: true, 'aria-expanded': (expanded ? 'true' : 'false') do
      content_tag :span, class: 'expand', title: label_expand do
        content_tag :span, label_expand, class: 'sr-only'
      end

      content_tag :span, class: 'collapse', title: label_collapse do
        content_tag :span, label_collapse, class: 'sr-only'
      end
    end
  end
end
