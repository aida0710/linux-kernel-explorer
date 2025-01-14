---
sidebar_position: 1
---
# consts.py

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/lib/py/consts.py`

### コンテンツ

```py
# SPDX-License-Identifier: GPL-2.0

import sys
from pathlib import Path

KSFT_DIR = (Path(__file__).parent / "../../..").resolve()
KSRC = (Path(__file__).parent / "../../../../../..").resolve()

KSFT_MAIN_NAME = Path(sys.argv[0]).with_suffix("").name

```
