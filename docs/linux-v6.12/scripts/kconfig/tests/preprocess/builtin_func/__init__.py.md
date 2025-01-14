---
sidebar_position: 4
---
# __init__.py

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/preprocess/builtin_func/__init__.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0
"""
Built-in function tests.
"""

def test(conf):
    assert conf.oldaskconfig() == 0
    assert conf.stdout_contains('expected_stdout')
    assert conf.stderr_matches('expected_stderr')

```
