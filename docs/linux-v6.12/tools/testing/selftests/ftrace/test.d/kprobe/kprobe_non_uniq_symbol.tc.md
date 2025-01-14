---
sidebar_position: 17
---
# kprobe_non_uniq_symbol.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/kprobe/kprobe_non_uniq_symbol.tc`

### コンテンツ

```tc
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0
# description: Test failure of registering kprobe on non unique symbol
# requires: kprobe_events

SYMBOL='name_show'

# We skip this test on kernel where SYMBOL is unique or does not exist.
if [ "$(grep -c -E "[[:alnum:]]+ t ${SYMBOL}" /proc/kallsyms)" -le '1' ]; then
	exit_unsupported
fi

! echo "p:test_non_unique ${SYMBOL}" > kprobe_events

```
