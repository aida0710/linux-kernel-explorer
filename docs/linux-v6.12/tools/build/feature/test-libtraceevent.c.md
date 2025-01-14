---
sidebar_position: 50
---
# test-libtraceevent.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libtraceevent.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <traceevent/trace-seq.h>

int main(void)
{
	int rv = 0;
	struct trace_seq s;
	trace_seq_init(&s);
	rv += !(s.state == TRACE_SEQ__GOOD);
	trace_seq_destroy(&s);
	return rv;
}

```
