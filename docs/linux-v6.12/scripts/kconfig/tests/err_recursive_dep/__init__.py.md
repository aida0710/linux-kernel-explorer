---
sidebar_position: 3
---
# __init__.py

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/err_recursive_dep/__init__.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0
"""
Detect recursive dependency error.

Recursive dependency should be treated as an error.
"""

def test(conf):
    assert conf.oldaskconfig() == 1
    assert conf.stderr_contains('expected_stderr')

```
