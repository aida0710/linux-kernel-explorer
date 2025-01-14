---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/rcutorture/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0+
all:
	( cd ../../../..; tools/testing/selftests/rcutorture/bin/kvm.sh --duration 10 --configs TREE01 )

```
