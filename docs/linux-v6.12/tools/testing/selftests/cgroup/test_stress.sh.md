---
sidebar_position: 19
---
# test_stress.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/cgroup/test_stress.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

./with_stress.sh -s subsys -s fork ${OUTPUT:-.}/test_core

```
