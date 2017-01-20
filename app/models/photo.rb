class Photo < ApplicationRecord
  has_many :characters

  def source
    url
  end
end
