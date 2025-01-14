---
sidebar_position: 123
---
# test_bpf.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/test_bpf.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# Runs bpf test using test_bpf kernel module

if /sbin/modprobe -q test_bpf ; then
	/sbin/modprobe -q -r test_bpf;
	echo "test_bpf: ok";
else
	echo "test_bpf: [FAIL]";
	exit 1;
fi

```
