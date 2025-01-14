---
sidebar_position: 16
---
# read_acquire

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/read_acquire`

### コンテンツ

```txt
cat <<EOF
	${int} ret;

	if (__native_word(${atomic}_t)) {
		ret = smp_load_acquire(&(v)->counter);
	} else {
		ret = raw_${atomic}_read(v);
		__atomic_acquire_fence();
	}

	return ret;
EOF

```
