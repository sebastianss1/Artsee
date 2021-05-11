class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :logged_in?

  def current_user
    return nil if self.session[:session_token].nil?
    @current_user ||= User.find_by(session_token: self.session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    user.reset_session_token!
    self.session[:session_token] = user.session_token
  end

  def logout!
    self.session[:session_token] = nil
  end

  def require_logged_in!
    redirect_to new_session_url if current_user.nil?
  end

end
