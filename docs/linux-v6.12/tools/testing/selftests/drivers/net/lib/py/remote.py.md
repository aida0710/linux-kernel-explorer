---
sidebar_position: 3
---
# remote.py

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/drivers/net/lib/py/remote.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0

import os
import importlib

_modules = {}

def Remote(kind, args, src_path):
    global _modules

    if kind not in _modules:
        _modules[kind] = importlib.import_module("..remote_" + kind, __name__)

    dir_path = os.path.abspath(src_path + "/../")
    return getattr(_modules[kind], "Remote")(args, dir_path)

```
