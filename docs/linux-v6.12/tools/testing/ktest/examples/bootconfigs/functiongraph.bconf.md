---
sidebar_position: 3
---
# functiongraph.bconf

### ファイル情報

- パス: `linux-v6.12/tools/testing/ktest/examples/bootconfigs/functiongraph.bconf`

### コンテンツ

```bconf
ftrace {
	tracing_on = 0  # off by default
	tracer = function_graph
	event.kprobes {
		start_event {
			probes = "pci_proc_init"
			actions = "traceon"
		}
		end_event {
			probes = "pci_proc_init%return"
			actions = "traceoff"
		}
	}
}


```
