import os


def get_config_from_environment(env_content):
    # get config from env
    env_content += "REACT_APP_GOOGLE_API_KEY={}\n".format(os.environ.get("REACT_APP_GOOGLE_API_KEY", ""))
    env_content += "REACT_APP_GOOGLE_CALENDAR_ID={}\n".format(os.environ.get("REACT_APP_GOOGLE_CALENDAR_ID", ""))
    return env_content


env_content = ""
env_content = get_config_from_environment(env_content)

with open(".env", "w", encoding="utf8") as env:
    env.write(env_content)