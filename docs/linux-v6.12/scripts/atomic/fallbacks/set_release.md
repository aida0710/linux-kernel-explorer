---
sidebar_position: 18
---
# set_release

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/set_release`

### コンテンツ

```txt
cat <<EOF
	if (__native_word(${atomic}_t)) {
		smp_store_release(&(v)->counter, i);
	} else {
		__atomic_release_fence();
		raw_${atomic}_set(v, i);
	}
EOF

```
