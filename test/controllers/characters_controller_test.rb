require 'test_helper'

class CharactersControllerTest < ActionDispatch::IntegrationTest
  test "should get verify" do
    get characters_verify_url
    assert_response :success
  end

end
