# require '../squishable/rails_helper', __file__

module ComponentHelper

  # TODO: I18n for labels
  def tabelle_arrows_tag(name, label, sorted)
    raw <<~EOS
      <input class="tabelle-arrow" id="#{name}_asc" type="radio" name="sort" value="#{name}_asc" checked=#{sorted == 'asc'} />
      <label class="tabelle-arrow--asc" for="#{name}_asc">
        <span class="sr-only">Sort #{label} Ascending</span>
      </label>

      <input class="tabelle-arrow" id="#{name}_desc" type="radio" name="sort" value="#{name}_desc" checked=#{sorted == 'desc'} />
      <label class="tabelle-arrow--desc" for="#{name}_desc">
        <span class="sr-only">Sort #{label} Descending</span>
      </label>
    EOS
  end

  # TODO: I18n for labels
  def tabelle_filter_tag(name, label, value)
    text_field name, class: 'tabelle-input', value: value, 'aria-label': "Filter #{label}"
  end

  def tabelle_header_tag(name, label:, short_label: nil, value: nil, sorted: false)
    header = short_label ? squishable_tag(label, short_label) : label

    raw <<~EOS
      <th scope="col" role="columnheader" aria-label=#{label}>
        <div class="tabelle-header">
          <span class="header #{'truncatable' if short_label}" id="#{name}_group" aria-hidden="true">#{raw header}</span>
          #{raw tabelle_arrows_tag name, label, sorted}
          #{raw tabelle_filter_tag name, label, value}
        </div>
      </th>
    EOS
  end

  def tabelle_tag(id: 'TabelleId', action:, &block)
    content_tag 'ta-belle', id: id, 'change-uri': true do
      form_tag method: :get, url: action, &block
    end
  end
end

