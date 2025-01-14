---
sidebar_position: 3
---
# __init__.py

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/auto_submenu/__init__.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0
"""
Create submenu for symbols that depend on the preceding one.

If a symbols has dependency on the preceding symbol, the menu entry
should become the submenu of the preceding one, and displayed with
deeper indentation.
"""


def test(conf):
    assert conf.oldaskconfig() == 0
    assert conf.stdout_contains('expected_stdout')

```
