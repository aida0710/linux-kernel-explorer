---
sidebar_position: 9
---
# mypy.ini

### ファイル情報

- パス: `linux-v6.12/tools/testing/kunit/mypy.ini`

### コンテンツ

```ini
[mypy]
strict = True

# E.g. we can't write subprocess.Popen[str] until Python 3.9+.
# But kunit.py tries to support Python 3.7+, so let's disable it.
disable_error_code = type-arg

```
