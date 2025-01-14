---
sidebar_position: 26
---
# test-jvmti-cmlr.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-jvmti-cmlr.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <jvmti.h>
#include <jvmticmlr.h>

int main(void)
{
	jvmtiCompiledMethodLoadInlineRecord	rec __attribute__((unused));
	jvmtiCompiledMethodLoadRecordHeader	hdr __attribute__((unused));
	PCStackInfo				p   __attribute__((unused));
	return 0;
}

```
