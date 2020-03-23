# require "../tabelle-toggler/rails_helper", __file__

module ComponentHelper
  def thead_tag(*args, &block)
    content_tag :thead, role: 'rowgroup', &block
  end

  def tbody_tag(*args, &block)
    content_tag :tbody, role: 'rowgroup', &block
  end

  def tr_tag(*args, &block)
    content_tag :tr, role: 'row', &block
  end

  def td_tag(column:, modifier: nil, &block)
    content_tag :td, role: 'cell', class: modifier, data: {column: column}, &block
  end

  def collapser_th_tag(label, *args)
    content_tag :th, class: 'table-toggler-cell', scope: 'col', role: 'columnheader' do
      content_tag :span, label, class: 'sr-only'
    end
  end

  def collapser_td_tag(expanded, label_expand:, label_collapse:)
    content_tag :td, class: 'table-toggler-cell', role: 'cell' do
      tabelle_toggler_tag expanded, label_expand: label_expand, label_collapse: label_collapse
    end
  end

end
