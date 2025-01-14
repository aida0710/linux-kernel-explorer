---
sidebar_position: 531
---
# test_lirc_mode2_kern.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/progs/test_lirc_mode2_kern.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// test ir decoder
//
// Copyright (C) 2018 Sean Young <sean@mess.org>

#include <linux/bpf.h>
#include <linux/lirc.h>
#include <bpf/bpf_helpers.h>

SEC("lirc_mode2")
int bpf_decoder(unsigned int *sample)
{
	if (LIRC_IS_PULSE(*sample)) {
		unsigned int duration = LIRC_VALUE(*sample);

		if (duration & 0x10000)
			bpf_rc_keydown(sample, 0x40, duration & 0xffff, 0);
		if (duration & 0x20000)
			bpf_rc_pointer_rel(sample, (duration >> 8) & 0xff,
					   duration & 0xff);
	}

	return 0;
}

char _license[] SEC("license") = "GPL";

```
