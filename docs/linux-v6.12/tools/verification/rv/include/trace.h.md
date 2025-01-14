---
sidebar_position: 3
---
# trace.h

### ファイル情報

- パス: `linux-v6.12/tools/verification/rv/include/trace.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

#include <tracefs.h>

struct trace_instance {
	struct tracefs_instance		*inst;
	struct tep_handle		*tep;
	struct trace_seq		*seq;
};

int trace_instance_init(struct trace_instance *trace, char *name);
int trace_instance_start(struct trace_instance *trace);
void trace_instance_destroy(struct trace_instance *trace);

int collect_registered_events(struct tep_event *event, struct tep_record *record,
			      int cpu, void *context);

```
