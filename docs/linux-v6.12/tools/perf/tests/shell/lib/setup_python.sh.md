---
sidebar_position: 8
---
# setup_python.sh

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/shell/lib/setup_python.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0

if [ "x$PYTHON" = "x" ]
then
  python3 --version >/dev/null 2>&1 && PYTHON=python3
fi
if [ "x$PYTHON" = "x" ]
then
  python --version >/dev/null 2>&1 && PYTHON=python
fi
if [ "x$PYTHON" = "x" ]
then
  echo Skipping test, python not detected please set environment variable PYTHON.
  exit 2
fi

```
