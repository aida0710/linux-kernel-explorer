---
sidebar_position: 3
---
# __init__.py

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/preprocess/variable/__init__.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0
"""
Variable and user-defined function tests.
"""

def test(conf):
    assert conf.oldaskconfig() == 0
    assert conf.stderr_matches('expected_stderr')

```
