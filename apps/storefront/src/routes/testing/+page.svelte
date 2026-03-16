<script lang="ts">
    import { onMount } from "svelte";

    let track: HTMLElement;

    onMount(() => {
        document.fonts.ready.then(() => {
            const item = track.children[0] as HTMLElement;
            const itemWidth = item.offsetWidth;
            const copies =
                Math.ceil(track.parentElement!.offsetWidth / itemWidth) + 2;

            for (let i = 1; i < copies; i++) {
                track.appendChild(item.cloneNode(true));
            }

            // on a N copies — on scroll d'un itemWidth
            track.style.setProperty("--shift", `-${itemWidth}px`);
        });
    });
</script>

<div class="marquee">
    <div bind:this={track} class="track">
        <span class="item"
            >Nigger 1 &nbsp;&nbsp;&nbsp; Nigger 2 &nbsp;&nbsp;&nbsp; Nigger 3
            &nbsp;&nbsp;&nbsp;</span
        >
    </div>
</div>

<style>
    .marquee {
        overflow: hidden;
    }

    .track {
        display: flex;
        width: max-content;
        animation: marquee 8s linear infinite;
    }

    .item {
        white-space: nowrap;
        flex-shrink: 0;
    }

    @keyframes marquee {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(var(--shift, -100px));
        }
    }
</style>
